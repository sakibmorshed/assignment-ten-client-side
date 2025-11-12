import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useLoaderData } from "react-router";

const UpdateHabit = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="max-w-7xl mx-auto min-h-screen">
        <h2 className="text-2xl font-bold text-center pt-10">Add New Habit</h2>

        <form className="card card-body bg-base-100 w-[500px] p-8 mx-auto my-10  max-w-md shrink-0 shadow-2xl">
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

export default UpdateHabit;
