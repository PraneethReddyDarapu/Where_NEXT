import { useState, useEffect } from "react";
import "./Tripsearch.css"
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

function TripSearch() {
  const [SetHide, Sethidden] = useState(false);
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
        <h2>Book Your Trip With Us</h2>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            origin
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="origin"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Destination 
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="destination"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Date of Travel 
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="date"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>
  <input class="form-check-input" type="checkbox" onChange={(event) => {
              Sethidden(true);
            }} value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Do you want to post your travel on Hangout together
  </label>
        <br></br>
        <div className= {SetHide ? "Unhide" : "Hide"}>
        <div class="mb-3">
        <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="description..."
            
          > </textarea>
            <label for="exampleFormControlInput1" class="form-label">
            Travel Description "this will be posted to hangout together"
          </label>
</div></div>
          <br></br>
        <div class="form-check">

  <br></br>
</div>
        <button className="btn btn-dark" onClick={createUser}>
          {" "}
          Book
        </button>
      </div>

     
    </div>
  );
}

export default TripSearch;
