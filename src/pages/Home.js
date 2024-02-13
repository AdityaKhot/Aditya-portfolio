import Projects from "../components/Projects";
import me from "../images/other/me.png";

export default function Home() {
    return (
        <>
            <div className="intro">
                <div className="intro-words">

                    <div className = "top">hi! i'm Aditya </div><br/>
                    <div className = "bottom"> Cloud & DevOps Enthusiast <br/><br/>  AWS Cloud + Terraform @ pvl </div>

                </div>
                <div className="intro-pic">

                    <img src={me} alt="drawing of Aditya Khot"></img>

                </div>
            </div>

            {/* project list */}
            <Projects />
        </>
    );
}