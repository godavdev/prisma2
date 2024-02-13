import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const page = async () => {

  const response = await (await fetch('http://localhost:3000/api/carrera/')).json()
  const carreras = response.data
  return (
    <div className='flex w-full h-dvh items-center justify-center gap-4'>
      {
        carreras.map((carrera) =>
          <Card key={carrera.id}>
            <CardHeader>
              <CardTitle>
                {carrera.nombre}
              </CardTitle>
              <CardDescription>
                {carrera.id}
              </CardDescription>
            </CardHeader>
          </Card>)
      }</div>
  )
}

export default page