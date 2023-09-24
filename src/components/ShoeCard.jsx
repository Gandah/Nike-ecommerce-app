

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe){
        changeBigShoeImage(imgURL.bigShoe)
    }}

  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ?
    'border-coral-red': 'border-transparent'}`}
    onClick={handleClick}>
        <div className="flex justify-center items-center bg-card 
        bg-cover sm:w-40 aspect-square rounded-xl max-sm:p-4">
            <img
                src={imgURL.thumbnail}
                alt="Shoe collection"
                className="w-[7.9rem] object-contain"
            />
        </div>
    </div>
  )
}

export default ShoeCard