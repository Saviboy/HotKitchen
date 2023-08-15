import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORISED } from "../constants/http_status";



export default (req: any, res: any, next: any) => {
    const token = req.headers.access_token as string;
    if(!token) return res.status(HTTP_UNAUTHORISED).send();

    try{
        const decodedUser = verify(token, `${process.env.JWT_SECRET_KEY}`);
        req.user = decodedUser;


    }catch (error){
        res.status(HTTP_UNAUTHORISED).send();

    }
    return next();
}