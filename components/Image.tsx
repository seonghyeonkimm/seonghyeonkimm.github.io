import { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'src'> & { src: string }
const Image = ({ ...rest }: Props) => <img {...rest} />

export default Image
