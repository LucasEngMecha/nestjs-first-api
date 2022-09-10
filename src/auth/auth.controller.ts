import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('singup')
    singup(@Body() dto: AuthDto) {
        return this.authService.singup(dto)
    }
    
    @HttpCode(HttpStatus.OK)
    @Post('singin')
    singin(@Body() dto: AuthDto) {
        return this.authService.singin(dto)
    }
}