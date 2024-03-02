import Post from '../../../Components/Post/Post'
import UserDetails from '../../../Components/UserDetails'
import * as P from '../style'

const ViewProfile = () => {
  return (
    <P.Profile>
      <UserDetails />
      <P.UserDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat labore, eligendi veritatis harum aspernatur accusamus explicabo cupiditate quos, necessitatibus eaque. Libero voluptatem quis doloremque, laudantium molestiae quaerat ea similique!
      </P.UserDescription>

      <P.PostWrapper>
        <Post locked />
        <Post locked />
        <Post locked />
      </P.PostWrapper>
    </P.Profile>

  )
}

export default ViewProfile
