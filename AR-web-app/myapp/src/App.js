
import './App.css';
import {useState} from 'react';
import {storage} from "./firebase";
import {ref , uploadBytes} from "firebase/storage";
import { v4 } from 'uuid';
import { upload } from '@testing-library/user-event/dist/upload';
import "./index.css";
function App() {
	const [imageUpload, setImageUpload] = useState(null);

	const uploadImage = () => {
		if(imageUpload == null)return;
		const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
		
		uploadBytes(imageRef, imageUpload).then(() =>{
			alert("image uploaded");
		})

	}

	const [userData, setUserData] = useState({
		name: "",
		price: "",
		retailer: "",
		description: "",
		image: "",
		model: ""
	});

	let name,value;
	const postUserData = (event) =>{
		name = event.target.name;
		value = event.target.value;

		setUserData({ ...userData, [name]: value});
	};

	const submitData = async(event) =>{
		event.preventDefault();
		const { name , price, retailer , description, image, model} = userData;
		const res = await fetch(
			"https://arapp-a0544-default-rtdb.firebaseio.com/productsInfo.json",
			{
				method : "POST",
				Headers : {
					"Content-Type" : "application/json",
				},
				body: JSON.stringify({name , price, retailer , description, image, model}),
			}	
		);

		if(res){
			
			alert("Data is Stored!!")
		}
		else{
			alert("Data is not sent!!");
		}

	}
  	return (
    	<div className="App">
				
			<div class = "container">
				<h2>
					<b>ENTER THE PRODUCT DETAILS: </b>
					
				</h2>
			</div>


			<form>
				<div class="form-container">
				<label id="spacing"for="exampleInputEmail1">Product Name: </label>
				<input
					type="text"
					class="form-control"
					id="name"
					name="name"
					placeholder="Enter the Product Name: "
					value= {userData.name}
					onChange={postUserData}

				/>

				<label id="spacing"for="exampleInputEmail1">Product Price: </label>
				<input
					type="text"
					class="form-control"
					id="price"
					name="price"
					placeholder="Enter the Product Price: "
					value= {userData.price}
					onChange={postUserData}
				/>
				

				
				<label id="spacing" for="exampleInputEmail1">Retailer Name: </label>
				<input
					type="text"
					class="form-control"
					id="retailer"
					name="retailer"
					placeholder="Enter the Retailer Name: "
					value= {userData.retailer}
					onChange={postUserData}
				/>
				
				<label id="spacing"for="exampleInputEmail1">Product Description: </label>
				<textarea
					type="text"
					class="form-control"
					id="description"
					name="description"
					placeholder="Enter the Product Description: "
					value= {userData.description}
					onChange={postUserData}
				/>
			
				<label id="spacing"for="exampleInputEmail1">Upload Product Image: </label>
				<input
					type="file"
					class="form-control"
					id="productImage"
					
				/>
				
				<label id="spacing"for="exampleInputEmail1">Upload Product AR Model: </label>
				<input
					type="file"
					class="form-control"
					id="productArmodel"
					
				/>
				
				<div id="adding" class="form-group form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
					<p class="form-check-label" for="exampleCheck1">Are you sure all the Entered Data is correct!!</p>
				</div>

				<button type="submit" class="btn btn-primary" onClick={submitData}>Submit</button>

				</div>
				
			</form>


				
				
				
				{/* <input type='file' class="form-field"
					onChange={(event) => {
						setImageUpload(event.target.files[0]);
						
					}}
				/>
				<button onClick={uploadImage}> Upload Image</button>  */}
			</div>
      		

    	

		

  	);
}

export default App;
