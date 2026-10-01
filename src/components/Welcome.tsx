interface WelcomeProps {
  username: string
  isPremium: boolean
}

function Welcome({ username, isPremium }: WelcomeProps) {
  return (
    <div>
      <h2>{isPremium ? 'Welcome back, premium user!' : 'Welcome, guest'}</h2>
      <p>Signed in as {username}</p>
    </div>
  )
}

export default Welcome
