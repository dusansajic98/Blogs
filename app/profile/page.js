import ProfileComponent from "@/components/Profile";

export default function ProfilePage (){

    return(
        <div style={{display:'flex',flexDirection:'column',gap:'30px'}}>
            <h1 style={{fontSize:'30px',textTransform:'uppercase',fontWeight:'bold',textAlign:'center'}}>My Profile</h1>
            
            <ProfileComponent/>
        </div>
    )
}