const Event8 = () => {
  return (
    <div className="bg-blue-300 m-4 p-4 rounded-lg w-fit flex flex-col justify-center items-center">
      <p>Event8 - Image Upload Button </p>
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={(e) => console.log(e.target.files[0].name)}
        className="bg-gray-100"
      />
    </div>
  );
};
export default Event8;
