import { useState, useEffect } from "react";
import "./blogForm.css";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./../../../src/firebase";
import { v4 } from "uuid";
import { stringLength } from "@firebase/util";

function FormBlog() {
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      desc: newDesc,
      image: imageUrls[imageUrls.length - 1],
    });
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="Blog">
      <div className="blogwrapper">
        <h2>You can post your travel blog here ...</h2>
        <span>
          <input
            type="file"
            className="btn btn-light"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button className="btn btn-dark" onClick={uploadFile}>
            Upload Image
          </button>
        </span>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="social_url"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="description..."
            onChange={(event) => {
              setNewDesc(event.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn btn-dark" onClick={createUser}>
          {" "}
          Create User
        </button>
      </div>

      <span className="blogoutput">
        {users.map((user) => {
          return (
            <div className="blogout">
              <div className="card">
                <img
                  class="card-img-top"
                  src={user.image}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title" href="{user.name}">Social Url</h5>
                  <p class="card-text">Description: {user.desc}</p>
                  <a href="#" class="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
              <button
                className="btn btn-light"
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                {" "}
                Remove your Blog
              </button>
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default FormBlog;
