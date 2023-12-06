import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    const formatUserName = (userName) => `@${userName}`
    return (
        <>
        <article className='App'>
        <TwitterFollowCard formatUserName={formatUserName} userName="twitter" name="Twitter"/>
        <TwitterFollowCard formatUserName={formatUserName} userName="github" name="GitHub"/>
        <TwitterFollowCard formatUserName={formatUserName} userName="nodejs" name="NodeJS"/>
        <TwitterFollowCard formatUserName={formatUserName} userName="react" name="React"/>
        </article>
        </>
    )
}