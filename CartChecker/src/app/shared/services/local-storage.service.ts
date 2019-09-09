import { Injectable, EventEmitter, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable()
export class LocalStorageService {
    private emitData: EventEmitter<any> = new EventEmitter();
    public isBrowser: boolean;
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
    ) {
        if (isPlatformBrowser(this.platformId)) {
            this.isBrowser = true;
        }
        else {
            this.isBrowser = false;
        }
    }
    setData(key: string, value: string) {
        if(this.isBrowser){
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
    //get data from local storage
    getData(key): string {
        if (this.isBrowser) {
            return JSON.parse(localStorage.getItem(key));
        }
        return ""
    }
    getChangeData() {
        return this.emitData;
    }
    //clear data in local storage
    clearData(key: string): void {
        if (this.isBrowser) {
            localStorage.removeItem(key);
        }
    }
}