import { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'src'> & { src: string }
// eslint-disable-next-line @next/next/no-img-element
const Image = ({ ...rest }: Props) => <img {...rest} alt={rest.alt} />

export default Image
