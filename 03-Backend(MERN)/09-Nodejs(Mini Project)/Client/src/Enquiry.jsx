import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

import EnquiryListView from "./EnquiryListView";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";


// let saveEnquiry = (event) => {  (uncontrolled component)
//   event.preventDefault();

//   let formData = {
//     sName: event.target.name.value,
//     sEmail: event.target.email.value,
//     sPhone: event.target.phone.value,
//     sMessage: event.target.message.value,
//   };

//   axios
//     .post(`http://localhost:8000/api/website/enquiry/insert`, formData)
//     .then((res) => {
//       console.log(res.data);
//     });
// };

const Enquiry = () => {


  let [formData, setFormData] = useState({
    sName: "",
    sEmail: "",
    sPhone: "",
    sMessage: "",
    _id:""
  });

  let[viewEnquiry,setViewEnquiry]=useState([])


  let getValue = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    let oldData = { ...formData };

    oldData[inputName] = inputValue;
    setFormData(oldData);
    console.log(oldData);
  };

  let saveEnquiry = (event) => {
    event.preventDefault();

    if(formData._id)
    {
      axios.put(`http://localhost:8000/api/website/enquiry/update/${formData._id}`,formData)
      .then((res) => {
        console.log(res.data);
        toast.success("Data Updated successfully!")
        setFormData({
          sName: "",
          sEmail: "",
          sPhone: "",
          sMessage: "",
          _id:""
        });
        getEnquiryList();
      });
    }
    else
    {
      axios
      .post(`http://localhost:8000/api/website/enquiry/insert`, formData)
      .then((res) => {
        console.log(res.data);
        toast.success("Data saved successfully!")
        setFormData({
          sName: "",
          sEmail: "",
          sPhone: "",
          sMessage: "",
        });
        getEnquiryList();
      });
    }
    
  };


  let getEnquiryList=()=>
  {
   axios.get(`http://localhost:8000/api/website/enquiry/view`).then((res)=>{
    return res.data
   }).then((finalData)=>
  {
    if(finalData.status)
    {
      setViewEnquiry(finalData.enquiryList)
    }
  })
  }

  useEffect(()=>
  {
    getEnquiryList()
  },[])



  return (
    <>
    <ToastContainer/>
      <div className="bg-[#16394f]">
        <h1 className="text-[40px] text-center py-3 font-bold text-white ">
          User Enquiry
        </h1>
        <div className="grid grid-cols-[30%_auto] gap-3">
          <div className="dark:bg-gray-800 P-4 ml-6 mb-3 rounded-lg ">
            <h2 className="text-[20px] font-bold text-center text-white pt-4">
              Enquiry Form
            </h2>
            {/* <form action="" onSubmit={saveEnquiry}> (for uncontrolled component)*/}
            <form action="" onSubmit={saveEnquiry}>
              <div className="py-3 p-4">
                <Label htmlFor="name">Your Name</Label>
                <TextInput
                  value={formData.sName}
                  onChange={getValue}
                  id="name"
                  type="text"
                  name="sName"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="py-3 p-4">
                <Label htmlFor="email">Your Email</Label>
                <TextInput
                  value={formData.sEmail}
                  onChange={getValue}
                  name="sEmail"
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="py-3 p-4">
                <Label htmlFor="phone">Your Phone Number</Label>
                <TextInput
                  value={formData.sPhone}
                  onChange={getValue}
                  name="sPhone"
                  id="phone"
                  type="text"
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
              <div className="py-3 p-4">
                <Label htmlFor="message">Enter your message</Label>
                <Textarea
                  value={formData.sMessage}
                  onChange={getValue}
                  name="sMessage"
                  id="message"
                  placeholder="Leave a message..."
                  required
                  rows={4}
                />
              </div>
              <div className="ml-8 pt-3 pb-4">
                <Button className="w-[90%]" type="submit">
                  {
                    formData._id?"Update":"Save"
                  }
                  
                </Button>
              </div>
            </form>
          </div>

          <EnquiryListView data={viewEnquiry} getEnquiryList={getEnquiryList} setFormData={setFormData} />
        </div>
      </div>
    </>
  );
};

export default Enquiry;
