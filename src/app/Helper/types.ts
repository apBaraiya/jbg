export interface NavBtn {
  map: string;
  Nbtn: string;
}

export interface ContactBtn {
  isbtnTwo: boolean;
  FirstNumber: number;
  SecondNumber?: number;
  Cbtn: string;
}

export interface Location {
  id: number;
  img: string;
  title: string;
  desc: string;
  navbtn: NavBtn;
  contactbtn: ContactBtn;
}
export interface gola {
  gola_img: string;
  gola_name: string;
}

