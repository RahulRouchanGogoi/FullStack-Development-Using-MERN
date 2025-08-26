import style from "./CSS/UserProfile.module.css";

const UserProfile = () => {
  return (
    <div>
      <h1 className={style.heading}>User Profile</h1>
      <div className={style.container}>
        <div >
          <img className={style.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1UV6H86WfXJJLz90Voy1Rqo0fRNPT7tX2w&s"></img>
        </div>
        <div>
          <h4>Rahul Rouchan Gogoi</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
