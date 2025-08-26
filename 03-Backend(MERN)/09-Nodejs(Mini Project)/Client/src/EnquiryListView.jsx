import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";

const EnquiryListView = ({ data, getEnquiryList, setFormData }) => {
  let deleteRow = (delid) => {
    Swal.fire({
      title: "Do you want to delete the User Information?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/website/enquiry/delete/${delid}`)
          .then((res) => {
            toast.success(`Enquiry deleted successfully for id: ${delid} !`);
            getEnquiryList();
          });
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  let editRow = (editId) => {
    axios
      .get(
        `http://localhost:8000/api/website/enquiry/updateSingleRow/${editId}`
      )
      .then((res) => {
        let data = res.data;
        setFormData({
        sName: data.getSingleEnquiry.name,
        sEmail: data.getSingleEnquiry.email,
        sPhone: data.getSingleEnquiry.phone,
        sMessage: data.getSingleEnquiry.message,
        _id:data.getSingleEnquiry._id
      });
      });
  };

  return (
    <div>
      <h2 className="text-[20px] font-bold text-center bg-gray-800 text-white pt-2 w-[97%] rounded-lg pb-2">
        Enquiry List
      </h2>

      {/* Table wrapper with fixed height + scroll */}
      <div className="overflow-y-auto h-[484px] mr-6 scrollbar-hide">
        <Table>
          {/* Sticky header */}
          <TableHead className="sticky top-0 z-10 bg-gray-800 text-white ">
            <TableRow className="!rounded-none">
              <TableHeadCell>Serial Number</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Phone Number</TableHeadCell>
              <TableHeadCell>Message</TableHeadCell>
              <TableHeadCell>Edit</TableHeadCell>
              <TableHeadCell>Delete</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {data.length >= 1 ? (
              data.map((items, index) => {
                return (
                  <TableRow
                    key={index}
                    className="bg-white  dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{items.name}</TableCell>
                    <TableCell>{items.email}</TableCell>
                    <TableCell>{items.phone}</TableCell>
                    <TableCell>{items.message}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => {
                          editRow(items._id);
                        }}
                        className="bg-blue-500 w-full px-1 py-1 text-sm  text-center text-white rounded-md hover:bg-blue-600 hover:scale-105 transform transition-all duration-200 "
                      >
                        Edit
                      </button>
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => {
                          deleteRow(items._id);
                        }}
                        className="bg-red-500 w-full px-1 py-1 text-sm text-white  rounded-md  hover:bg-red-600 hover:scale-105 transform transition-all duration-200"
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow className="bg-white  dark:border-gray-700 dark:bg-gray-800">
                <TableCell
                  colSpan={7}
                  className="whitespace-nowrap text-center font-medium text-gray-900 dark:text-white"
                >
                  No Data Found!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EnquiryListView;
