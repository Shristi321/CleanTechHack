import Post from './Post'

const Feed = () => {
    return (
        <div>
            <Post fullname="asdf asdf" city="NYC" caption="I walked 3 miles today!" />
            <Post fullname="fdsa fdsa" city="Madison" caption="Recycled!" />
            <Post fullname="qwerty" city="Minneapolis" caption="I planted a tree" />
        </div>
    )
}

export default Feed
