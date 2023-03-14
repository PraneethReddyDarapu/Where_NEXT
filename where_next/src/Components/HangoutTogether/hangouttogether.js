import { useState, useEffect } from "react";
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

function HangoutTogether() {
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
            <div className="blogout">
              <div className="card">
                <div class="card-body">
                  <a  class="btn btn-primary" className="card-title" >Traveling to India</a>
                  <p class="card-text">Description : I am planning to Travel india and my places of interest include Tajmahal , Lotus temple . Intrested people can join me  </p>
                  <p class="card-text">Planned/Completed Date of travel : 12/18/2023 </p>
                  <br></br>
                  <a class="btn btn-primary">
                    Join group chat
                  </a>
                  <a>  </a>
                  <a class="btn btn-primary">
                    chat personally
                  </a>
                </div>
              </div>
              <br></br>
              <div className="card">
                <div class="card-body">
                  <a  class="btn btn-primary" className="card-title" >Traveled to Montana Mountain trecking</a>
                  <p class="card-text">Description : I have visited Montana, best time to visit is around 7am in the morning, carry Extra waterbottles, any queries can contact me on chat </p>
                  <p class="card-text">Planned/Completed Date of travel : 12/18/2020</p>
                  <br></br>
                  <a class="btn btn-primary">
                    Join group chat
                  </a>
                  <a>  </a>
                  <a class="btn btn-primary">
                    chat personally
                  </a>

                </div>
                
              </div>
              
              {/* <button
                className="btn btn-light"
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                {" "}
                Remove your Blog
              </button> */}
            </div>

     
    </div>
  );
}

export default HangoutTogether;
