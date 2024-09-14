import { Injectable } from '@nestjs/common'
import { helloWorld } from 'hello-world'

@Injectable()
export class AppService {
  getHello(): string {
    return helloWorld()
  }
}
