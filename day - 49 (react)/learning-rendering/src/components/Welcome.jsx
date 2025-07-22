function Welcome({userName, email}){

    return <>
        <h1>Hello {userName}</h1>
        <h2>Welcome back to our website</h2>
        <p>{email}</p>
    </>
}

export default Welcome;
