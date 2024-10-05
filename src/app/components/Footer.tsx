import Link from "next/link"
export default function Footer(){
    return(
        <div className = "Footer">
            <ul className = "Footer-button">
                <Link href = "/about">
                <ul>About</ul>
                </Link>
                <Link href ="/support">
                <ul>Support</ul>
                </Link>
                <Link href = "quick-links">
                <ul>Quick Links</ul>
                </Link>
                <Link href = "get-in-touch">
                <ul>Get In Touch</ul>
                </Link>
                
            </ul>

        </div>
    )
}