import TextField from '@mui/material/TextField';
function Contact() {
  return (
    <div className="flex flex-col mt-10 items-center justify-center">
      <h1 className='text-center font-semibold text-xl m-4'>Contact Us about this property</h1>
      <form action="" className='flex flex-col items-center gap-4 h-full w-4/6 ml-8'>
        <TextField className='w-full' id="standard-basic" label="Name" variant="outlined"  />
        <TextField className='w-full' id="standard-basic" label="Phone" type='string' variant="outlined" />
        <TextField className='w-full' id="standard-basic" label="Email" type='email' variant="outlined" />
        <textarea name="description" placeholder='Describe what you want to tell us' className="border-2 indent-2 w-full" id="textareadescription" cols={20} rows={10}></textarea>
        <button className='p-2 bg-[#333333] text-white text-lg w-1/3'>Send</button>
      </form>
    </div>
  );
}

export default Contact;
