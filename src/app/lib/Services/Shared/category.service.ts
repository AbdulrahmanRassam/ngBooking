import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../Interfaces/category';
import { categories } from 'src/app/Classes/consts';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // data=new Loading<Category>();
 public data= signal<Category[]>(categories) ;;
  activeRoot=signal<string>('RootPro');
  action$: Observable<Category> | undefined;
  active=signal<Category>({name:'Dashboard',arName:'DashBoard',father:'',url:'/home',pointTo:'',progCode:'',level:1,is_main:false,children:[]});

  constructor() {
  }


   setData(category:Category[]){
    this.data.set(category);
   }

  setActive(url:string) {
    this.active.set(this.getCategoryByCode(url)??this.active());
  }
  setActiveRoot(root:string) {
    this.activeRoot.set(root);
    this.active.set(this.getCategoryByCode(root)??{name:'Home',arName:'DashBoard',father:'',url:'/home',pointTo:'',progCode:'',level:1,is_main:false,children:[]});

  }

  getCategories(): Category[] {
    return this.data();
  }

  getCategoryByCode(code: string): Category | undefined {

    return this.data().find(Category => Category.progCode === code);
  }

  getCategoryByUrl(url: string): Category | undefined {

    return this.data().find(Category => Category.url === url);
  }
  getCategoryChildren(code: string):Category[] |[] {
    if (!code) {
       code=this.activeRoot();
    }
    return this.data?this.data().filter(config => config?.father ==code):[];
  }
}
