'use client'



export const Footer = () => {
  const { toast } = useToast()
  const [ isLoading , startLoading, stopLoading ] = UseLoading()
  const form = useForm<z.infer<typeof ContactFormFieldsType>>({
    resolver: zodResolver(ContactFormFieldsType),
    defaultValues: {
      email: '',
      message: ''
    }
  })

  async function onSubmit(values: z.infer<typeof ContactFormFieldsType>) {
    startLoading();
    const { email, message } = values
    
    const contact = await fetch('/api/contact', {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message
      })
    })

    if(contact.status === 200) {
      toast({
        variant: "success",
        title: "Message envoyé",
        description: <Typography component="p" variant="body-sm">Message envoyé avec succès</Typography>,
      })
      stopLoading()
    } else {
      toast({
        variant: "destructive",
        title: "Erreur !",
        description: <Typography component="p" variant="body-sm">Une erreur est survenue. Veuillez réessayer.</Typography>,
      })
      stopLoading()
    }

  }

  return (
    <footer className="flex gap-16 flex-col md:flex-row justify-center md:justify-between py-16 px-4 md:px-8 md:py-16 bg-black text-white z-10">
      <Container className="w-full md:w-[32vw]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Container className="flex flex-col gap-2 text-black">
              <InputField
                control={form.control}
                name="email"
                placeholder="Entrez votre adresse email"
              />
              <InputField
                control={form.control}
                name="message"
                placeholder="Entrez votre mesage"
                type="textarea"
                className="h-12"
              />
            </Container>
            <Container className="flex flex-row justify-between items-center">
              <Buttons type='submit' isLoading={isLoading} className="w-full md:w-auto">Envoyer</Buttons>
            </Container>
          </form>
        </Form>
      </Container>
      <Container className="flex flex-col md:flex-row gap-16">
        <Container className="flex flex-col md:flex-row gap-4">
          <Container className="flex flex-col gap-8">
            <Container className="flex flex-col gap-4">
              <Typography variant="title-sm">Adresse</Typography>
              <Container className="flex flex-col gap-1">
                <Typography>3 Av. Kintambo C. Gombe</Typography>
              </Container>
            </Container>
            <Container className="flex flex-col gap-4">
              <Typography variant="title-sm">Contact</Typography>
              <Container className="flex flex-col gap-1">
                <Typography>+243 853 045 935</Typography>
                <Typography>Info-vignette@dgrk.cd</Typography>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className="flex flex-col gap-8">
          <Container className="flex flex-col gap-4">
            <Typography variant="title-sm">
              Pages
            </Typography>
            <Container className="flex flex-col gap-1">
            {
              MainRoutes.map(({title, baseUrl}) => (
                <Typography key={title}>
                  <Link href={baseUrl!}>
                    {title}
                  </Link>
                </Typography>
              ))
            }
            </Container>
          </Container>
          <Container className="flex flex-col gap-4">
            <Typography variant="title-sm">
              Réseaux sociaux
            </Typography>
            <Container className="flex flex-row gap-4">
            {
              SocialNetworks.map(({CustomIcon, baseUrl, title}) => (
                <Link href={baseUrl!}>
                  <Image src={CustomIcon!} alt={title} width={28} height={28} />
                </Link>
              ))
            }
            </Container>
          </Container>
        </Container>
        <Container className="flex flex-col gap-8">
          <Container className="flex flex-col gap-4">
            <Typography variant="title-sm">
              Monyaya
            </Typography>
            <Container className="flex flex-col gap-1">
            {
              Company.map(({title, baseUrl}) => (
                <Typography key={title}>
                  <Link href={baseUrl!}>
                    {title}
                  </Link>
                </Typography>
              ))
            }
            </Container>
          </Container>
        </Container>
      </Container>
    </footer>
  );
};

