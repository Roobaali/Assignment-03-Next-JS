import Link from "next/link"

export default function Header(){
    return(
        <div className = "header">
            <ul className = "header-button">
                
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="/about-us">
                <li>About</li>
                </Link>
                <Link href="/contact-us">
                <li>Contact us</li>
                </Link>
                <Link href="Portfolio">
                <li>Portfolio</li>
                </Link>
                
            </ul>
        </div>
    )
}