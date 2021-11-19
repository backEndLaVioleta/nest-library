import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(new ValidationPipe()) // controlador de los decodarores de 


  const config = new DocumentBuilder()
    .setTitle('library API REST')
    .setDescription('nestjs rest api')
    .setVersion('1.0')
    .addBearerAuth({type: 'http', scheme:'bearer', bearerFormat:'jwt', in: 'header'}, 'access-token')
    .addBasicAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)


  await app.listen(3000)
}

bootstrap()
