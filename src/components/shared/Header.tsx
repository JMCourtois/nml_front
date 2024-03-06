import Link from "next/link";

export const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>

                    <Link href="/cognition">
                        <li>Cognitive</li>
                    </Link>

                    <Link href="/selfandsocial">
                        <li>Self & Social</li>
                    </Link>

                    <Link href="/technical">
                        <li>Technical</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}