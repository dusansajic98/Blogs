import HomeComponent from "@/components/Home";

export default function Home(){
  return(
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'30px'}}>
      <h1 style={{fontSize:'50px',fontWeight:'bold',textAlign:'center'}}>
        Welcome to the Blog Site <br/> You can find some Awesome things here!
      </h1>
      <form style={{display:'flex',gap:'20px',alignItems:'center',justifyContent:'center'}}>
        <input style={{outline:'none',
          backgroundColor:'transparent',
          border:'2px solid #999',
          padding:'.5rem 1rem',
          borderRadius:'12px',
          padding:'.5rem 1rem'
          }} 
          placeholder="Search..." />
        <button>Search</button>
      </form>

      <HomeComponent/>
    </div>
  )
}