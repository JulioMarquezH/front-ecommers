import signature from '@/assets/imgs/signature.png'


export default function Header() {

  return (
    <div className="container-header">
        <div className="container space-between">
            <img src={signature.src} alt="logo" />
            {/* <p>Contact</p> */}
            
        </div>
    </div>
  );
}
