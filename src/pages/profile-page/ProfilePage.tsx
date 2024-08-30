import { useUser } from "@clerk/clerk-react"
import styled from "@emotion/styled"
import { theme } from "../../styling/Themeing"

const ProfilePageContainer = styled.div`
  display: grid;
  max-width: 1284px;
  padding: 24px 16px;
  margin: auto;
  gap: 10px 20px;
  justify-items: center;

  grid-template-areas:
    "profile-image profile-details profile-details profile-details"
    "favourites favourites favourites favourites"
    "books-owned books-owned want-to-read want-to-read"
    "to-be-read to-be-read other other";
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const ProfilePicture = styled.img`
  grid-area: profile-image;
`

const ProfileDetailsContainer = styled.div`
  grid-area: profile-details;
  height: fit-content;
`
const FavouritesContainer = styled.div`
  grid-area: favourites;
`

const BooksOwnedContainer = styled.div`
  grid-area: books-owned;
`

const WantToReadContainer = styled.div`
  grid-area: want-to-read;
`

const ToBeReadContainer = styled.div`
  grid-area: to-be-read;
`

const OtherContainer = styled.div`
  grid-area: other;
`

const ProfilePage = () => {
  const { isLoaded, isSignedIn, user } = useUser()

  return (
    <ProfilePageContainer>
      <ProfilePicture src={user?.imageUrl} alt="User Profile Picture" />
      <ProfileDetailsContainer>heading</ProfileDetailsContainer>
      <FavouritesContainer> here</FavouritesContainer>
      <BooksOwnedContainer>Books I own</BooksOwnedContainer>
      <WantToReadContainer>Want to read</WantToReadContainer>
      <ToBeReadContainer>To be read</ToBeReadContainer>
      <OtherContainer>Other</OtherContainer>
    </ProfilePageContainer>
  )
}

export default ProfilePage
