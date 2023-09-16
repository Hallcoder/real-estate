import TextField from "@mui/material/TextField";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
interface Props {
  property: any;
}
const Contact: React.FC<Props> = ({ property }) => {
  const notify = (message) =>
    toast(message, {
      theme: "dark",
      position: "top-center",
      pauseOnHover: true,
    });

  let [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    text: "",
  });
  let [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    let formdata = { ...formData };
    console.log(e.target.name);
    formdata[e.target.name] = e.target.value;
    setFormData(formdata);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let tempFormData = formData;
    tempFormData.text = formData.text + ` ${JSON.stringify(property)}`;
    setFormData(tempFormData);
    axios
      .post(import.meta.env.VITE_BASE_URL as string, { ...formData })
      .then((data) => {
        setLoading(false);
        console.log(data);
        setFormData({
          phone: "",
          name: "",
          email: "",
          text: "",
        });
        notify("Message Sent, We will get back to you very soon!");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setFormData({
          phone: "",
          name: "",
          email: "",
          text: "",
        });
        notify("There was an error in sending the message , Try again!");
      });
  };
  return (
    <div className="flex flex-col mt-10  justify-center">
      <ToastContainer />
      <h1 className="font-semibold text-xl m-8">
        Contact Us about this property
      </h1>
      <form
        action=""
        className="flex flex-col items-center gap-4 mx-1 h-full sm:w-4/6 sm:ml-8"
      >
        <TextField
          className="w-full"
          onChange={handleChange}
          required
          value={formData["name"]}
          id="standard-basic"
          label="Name"
          name="name"
          variant="outlined"
        />
        <TextField
          className="w-full"
          onChange={handleChange}
          required
          value={formData["phone"]}
          id="standard-basic"
          label="Phone"
          name="phone"
          type="tel"
          variant="outlined"
        />
        <TextField
          className="w-full"
          onChange={handleChange}
          required
          value={formData["email"]}
          id="standard-basic"
          label="Email"
          name="email"
          type="email"
          variant="outlined"
        />
        <textarea
          name="text"
          placeholder="Describe what you want to tell us"
          onChange={handleChange}
          required
          value={formData["text"]}
          className="border-2 indent-2 w-full"
          id="textareadescription"
          cols={20}
          rows={5}
        ></textarea>
        <button
          onClick={handleSubmit}
          className="p-2 bg-[#333333] rounded-sm text-white text-lg w-1/3"
        >
          {!loading ? "Send" : "Loading..."}
        </button>
      </form>
    </div>
  );
};

export default Contact;
