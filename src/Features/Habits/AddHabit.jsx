import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const AddHabit = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const addHabit = (e) => {
    e.preventDefault();

    const habitTitle = e.target.habitTitle.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const reminderTime = e.target.reminderTime.value;
    const userEmail = e.target.userEmail.value;
    const userName = e.target.userName.value;
    const image = e.target.image.value;

    const formData = {
      habitTitle,
      description,
      category,
      reminderTime,
      userEmail,
      userName,
      image,
    };

    fetch("https://habit-server-app.vercel.app/allHabits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully added habit !");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div className="md:max-w-7xl mx-auto min-h-screen">
        <h2 className="text-2xl font-bold text-center pt-10">Add New Habit</h2>

        <form
          onSubmit={addHabit}
          className="card card-body bg-base-100 w-[500px] p-8 mx-auto my-10  max-w-md shrink-0 shadow-2xl"
        >
          <fieldset className="fieldset">
            <label className="label">Habit Title</label>
            <input
              type="text"
              className="input"
              required
              name="habitTitle"
              placeholder="Enter habit title"
            />
            <label className="label">Description</label>
            <textarea
              type="text"
              className="input"
              required
              name="description"
              placeholder="Enter habit description"
            ></textarea>
            <label className="label">Category</label>
            <select
              name="category"
              required
              className="select select-bordered "
            >
              <option disabled selected>
                Select a category
              </option>
              <option>Morning</option>
              <option>Work</option>
              <option>Fitness</option>
              <option>Evening</option>
              <option>Study</option>
            </select>
            <label className="label">Reminder Time</label>
            <input type="time" className="input" required name="reminderTime" />
            <label className="label">Image Url</label>
            <input
              type="text"
              className="input"
              required
              name="image"
              placeholder="image url"
            />
            <label className="label">User Name</label>
            <input
              type="text"
              className="input"
              required
              defaultValue={user.displayName}
              name="userName"
              placeholder="Enter your Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              required
              defaultValue={user.email}
              name="userEmail"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              required
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Add Habit</button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default AddHabit;
