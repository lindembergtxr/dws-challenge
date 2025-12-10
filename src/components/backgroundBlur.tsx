import styled from 'styled-components'

import { media } from '@/styles/media'

const baseGradient = (color: string, position: string, spread: string) =>
  `radial-gradient(circle at ${position}, ${color} 0%, transparent ${spread})`

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  z-index: -1;
  pointer-events: none;

  ${({ theme }) => {
    const color1 = theme.colors.backgorundBlob.secondary
    const color2 = theme.colors.backgorundBlob.accent
    const color3 = theme.colors.backgorundBlob.primary

    return `
      background-repeat: repeat-y;

      ${media.mobile} {
        background-size: 100% 200vh;
        background-image:
          ${baseGradient(color1, '90% 12%', '50vw')}, 
          ${baseGradient(color2, '10% 40%', '50vw')},
          ${baseGradient(color3, '90% 80%', '50vw')};
        filter: blur(50px);
      }

      ${media.tablet} {
        background-size: 100% 250vh;
        background-image:
          ${baseGradient(color1, '85% 15%', '40vw')}, 
          ${baseGradient(color2, '15% 50%', '40vw')},
          ${baseGradient(color3, '85% 80%', '40vw')};
        filter: blur(50px);
      }

      ${media.desktop} {
        background-size: 100% 250vh;
        background-image:
          ${baseGradient(color1, '80% 15%', '30vw')}, 
          ${baseGradient(color2, '20% 45%', '30vw')},
          ${baseGradient(color3, '80% 80%', '30vw')};
        filter: blur(50px);
      }

      ${media.widescreen} {
        background-size: 100% 250vh;
        background-image:
          ${baseGradient(color1, '75% 15%', '25vw')}, 
          ${baseGradient(color2, '25% 45%', '25vw')},
          ${baseGradient(color3, '75% 80%', '25vw')};
        filter: blur(50px);
      }
    `
  }}
`

export function BackgroundBlur() {
  return <BackgroundContainer />
}
