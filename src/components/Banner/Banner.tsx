import { Carousel, Image } from 'antd'
import women from '@/assets/images/women.jpg'
import men from '@/assets/images/men 1.jpg'
import kid from '@/assets/images/kid 1.jpg'
import familly from '@/assets/images/familly.jpg'

export const Banner = (): JSX.Element => {
  return (
    <Carousel autoplay>
      <div>
        <Image src={women} alt="women" />
      </div>
      <div>
        <Image src={men} alt="men" />
      </div>
      <div>
        <Image src={kid} alt="kid" />
      </div>
      <div>
        <Image src={familly} alt="familly" />
      </div>
    </Carousel>
  )
}
