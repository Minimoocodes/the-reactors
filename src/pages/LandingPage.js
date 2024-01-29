export default function LandingPage({ navigate }) {
    return (
        <>
            <br />
            <button onClick={() => navigate("warm")}>go_to_warm</button>
            <button onClick={() => navigate("cold")}>go_to_cold</button>
        </>
    )
}