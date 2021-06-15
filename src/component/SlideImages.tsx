import Slider from 'react-slick'

const SlideImage: React.FC<{ numbers: string[] }> = ({ numbers }) => {
  const settings = {
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    className: 'slider variable-width',
    variableWidth: true,
  }

  const images: JSX.Element[] = numbers.map((item, index) => {
    // TODO: テスト用に直接URL指定しているが本番時は変更する
    const url = `https://github.com/fanzeyi/pokemon.json/blob/master/images/${item}.png?raw=true`

    // HACK: react-slickの仕様なのかstyleでwidthを指定しないと表示がおかしくなる為、CSSを直接記述している
    return (
      <div style={{ width: 190 }} key={index}>
        <img style={{ paddingLeft: 40 }} src={url} alt="ポケモン名" />
      </div>
    )
  })
  return (
    <div className="slide-images">
      <Slider {...settings}>{images}</Slider>
    </div>
  )
}

export default SlideImage
