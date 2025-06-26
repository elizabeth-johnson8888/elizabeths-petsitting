import profImage from '../../assets/EJ_Emily_Bartell_Photography-22.jpg'

// Shows my profile image
function ProfileImage() {
  return (
    <div className='flex justify-center items-center'>
      <img src={profImage} alt="My Picture" className='w-60 border-4 border-pink-xtra-dark rounded-lg max-w-full mx-auto hidden sm:block'/>
    </div>
    // <img
    //   src="EJ_Emily_Bartell_Photography-22.jpg"
    //   alt="Elizabeth Johnson"
    //   className="h-[40vmin] mr-4"
    // />
  );
}

export default ProfileImage;