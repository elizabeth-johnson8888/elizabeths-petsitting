import profImage from '../../assets/EJ_Emily_Bartell_Photography-22.jpg'

// Shows my profile image
function ProfileImage() {
  return (
    <img src={profImage} alt="My Picture" className='w-60 mr-16 col-span-1'/>
    // <img
    //   src="EJ_Emily_Bartell_Photography-22.jpg"
    //   alt="Elizabeth Johnson"
    //   className="h-[40vmin] mr-4"
    // />
  );
}

export default ProfileImage;