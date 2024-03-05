import Image from "next/image"

const ApplicationLogo = (props:any) => (
    <Image
    {...props}
    src="/img/logo-brand.png"
    alt="Workflow"
    width={120}
    height={120}
  />
)

export default ApplicationLogo