export interface ResponseModel {
    
        code: number,
        status: string,
        result: {
          token: string,
          expiredAt: number
        }
      
  }