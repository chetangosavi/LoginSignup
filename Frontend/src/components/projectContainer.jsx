
const projectContainer = ({name,description,status}) => {
  return (
    <div>
        <div className="flex flex-col bg-white">
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{status}</p>
        </div>
    </div>
  )
}

export default projectContainer