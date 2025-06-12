import LinkTargetBlank from "../ui/LinkTargetBlank";
import '../style/footer.scss'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Application</p>
                <div>
                    <LinkTargetBlank to='https://www.facebook.com/tuans.huynh.174'>Facebook</LinkTargetBlank>
                    <LinkTargetBlank to='https://github.com/TuansHuynh'>Github</LinkTargetBlank>
                    <LinkTargetBlank to='https://www.linkedin.com/'>LinedkIn</LinkTargetBlank>
                </div>
                <div>
                    <a href="/privacy-policy" className="">Privacy Policy</a>
                    <a href="/terms-of-service" className="">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}