import { Component } from "@angular/core";

@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html",
  styleUrls: ["./html-body-main.component.css"]
})

export class HtmlBodyMainComponent {

  start_func(): void {

    let start_bttn: any = document.querySelector(String("#start-bttn"));
    let annul_UI_state_bttn: any = document.querySelector(String("#annul-UI-state-bttn"));
    let ___tds___: any = document.querySelectorAll(String("td"));
    let memo_index_: number = <number>0;

    start_bttn.style.visibility = <string>"hidden";
    setTimeout(() => {

      let indx_: number[] = [Number(6), Number(8)];
      let branch: number = Number(Math.floor(Math.random() * <number>2));

      ___tds___[indx_[branch]].innerHTML = String('🔘');

    },
      <number>300
    );
    setTimeout(() => {

      let indx_memo: number = <number>0;

      for (let indx_iter: number = <number>0; indx_iter <= <number>14; indx_iter++) {
        if (String(___tds___[indx_iter].innerHTML) === String('🔘')) {
          indx_memo = indx_iter;
          ___tds___[indx_iter].innerHTML = String('⬛');
          break;
        };
      };
      if (indx_memo === <number>6) {

        let next_indxs: number[] = [Number(20), Number(22)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      }
      else {

        let next_indxs: number[] = [Number(22), Number(24)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      };
    },
      <number>600
    );
    setTimeout(() => {

      let indx_memo: number = <number>0;

      for (let indx_iter: number = <number>15; indx_iter <= <number>29; indx_iter++) {
        if (String(___tds___[indx_iter].innerHTML) === String('🔘')) {
          indx_memo = indx_iter;
          ___tds___[indx_iter].innerHTML = String('⬛');
          break;
        };
      };
      if (indx_memo === <number>20) {

        let next_indxs: number[] = [Number(34), Number(36)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else if (indx_memo === <number>22) {

        let next_indxs: number[] = [Number(36), Number(38)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else {

        let next_indxs: number[] = [Number(38), Number(40)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      };
    },
      <number>900
    );
    setTimeout(() => {

      let indx_memo: number = <number>0;

      for (let indx_iter: number = <number>30; indx_iter <= <number>44; indx_iter++) {
        if (String(___tds___[indx_iter].innerHTML) === String('🔘')) {
          indx_memo = indx_iter;
          ___tds___[indx_iter].innerHTML = String('⬛');
          break;
        };
      };
      if (indx_memo === <number>34) {

        let next_indxs: number[] = [Number(48), Number(50)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');


      } else if (indx_memo === <number>36) {

        let next_indxs: number[] = [Number(50), Number(52)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else if (indx_memo === <number>38) {

        let next_indxs: number[] = [Number(52), Number(54)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else {

        let next_indxs: number[] = [Number(54), Number(56)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      };

    },
      <number>1200
    );
    setTimeout(() => {

      let indx_memo: number = <number>0;

      for (let indx_iter: number = <number>45; indx_iter <= <number>59; indx_iter++) {
        if (String(___tds___[indx_iter].innerHTML) === String('🔘')) {
          indx_memo = indx_iter;
          ___tds___[indx_iter].innerHTML = String('⬛');
          break;
        };
      };
      if (indx_memo === <number>48) {

        let next_indxs: number[] = [Number(62), Number(64)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else if (indx_memo === <number>50) {

        let next_indxs: number[] = [Number(64), Number(66)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else if (indx_memo === <number>52) {

        let next_indxs: number[] = [Number(66), Number(68)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else if (indx_memo === <number>54) {

        let next_indxs: number[] = [Number(68), Number(70)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else {

        let next_indxs: number[] = [Number(70), Number(72)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      };
    },
      <number>1500
    );
    setTimeout(() => {

      let indx_memo: number = <number>0;

      for (let indx_iter: number = <number>60; indx_iter <= <number>74; indx_iter++) {
        if (String(___tds___[indx_iter].innerHTML) === String('🔘')) {
          indx_memo = indx_iter;
          ___tds___[indx_iter].innerHTML = String('⬛');
          break;
        };
      };
      if (indx_memo === <number>62) {

        let next_indxs: number[] = [Number(76), Number(78)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else if (indx_memo === <number>64) {

        let next_indxs: number[] = [Number(78), Number(80)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else if (indx_memo === <number>66) {

        let next_indxs: number[] = [Number(80), Number(82)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else if (indx_memo === <number>68) {

        let next_indxs: number[] = [Number(82), Number(84)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else if (indx_memo === <number>70) {

        let next_indxs: number[] = [Number(84), Number(86)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      } else {

        let next_indxs: number[] = [Number(86), Number(88)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      };
    },
      <number>1800
    );
    setTimeout(() => {

      let indx_memo: number = <number>0;

      for (let indx_iter: number = <number>75; indx_iter <= <number>89; indx_iter++) {
        if (String(___tds___[indx_iter].innerHTML) === String('🔘')) {
          indx_memo = indx_iter;
          ___tds___[indx_iter].innerHTML = String('⬛');
          break;
        };
      };

      if (indx_memo === <number>76) {

        let next_indxs: number[] = [Number(90), Number(92)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      }
      else if (indx_memo === <number>78) {

        let next_indxs: number[] = [Number(92), Number(94)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      }
      else if (indx_memo === <number>80) {

        let next_indxs: number[] = [Number(94), Number(96)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      }
      else if (indx_memo === <number>82) {

        let next_indxs: number[] = [Number(96), Number(98)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      }
      else if (indx_memo === <number>84) {

        let next_indxs: number[] = [Number(98), Number(100)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      }
      else if (indx_memo === <number>86) {

        let next_indxs: number[] = [Number(100), Number(102)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      }
      else {

        let next_indxs: number[] = [Number(102), Number(104)];
        let branchie_: number = Number(Math.floor(Math.random() * <number>2));

        ___tds___[next_indxs[branchie_]].innerHTML = String('🔘');

      };
    },
      <number>2100
    );
    setTimeout(() => {

      for (let yindx_iter: number = <number>90; yindx_iter <= <number>104; yindx_iter++) {
        if (String(___tds___[yindx_iter].innerHTML) === String('🔘')) {
          memo_index_ = yindx_iter;
          ___tds___[yindx_iter].innerHTML = String('🔽');
          break;
        };
      };
      ___tds___[memo_index_ + <number>15].innerHTML = String('🔘');
      if (
        ___tds___[memo_index_ + <number>30].innerHTML === String('🔘')
      ) {
        clearTimeout(bbb_G);
        clearTimeout(ccc_G);
        clearTimeout(ddd_G);
        clearTimeout(eee_G);
        clearTimeout(fff_G);
        clearTimeout(ggg_G);
        clearTimeout(hhh_G);
        clearTimeout(iii_G);
        clearTimeout(jjj_G);
        clearTimeout(kkk_G);
        clearTimeout(input_tfunc_output);
        annul_UI_state_bttn.style.visibility = <string>"visible";
      };

    },
      <number>2200
    );

    let bbb_G: any = setTimeout(() => {

      ___tds___[memo_index_ + <number>15].innerHTML = String('⬛');
      ___tds___[memo_index_ + <number>30].innerHTML = String('🔘');
      if (
        ___tds___[memo_index_ + <number>45].innerHTML === String('🔘')
      ) {
        clearTimeout(ccc_G);
        clearTimeout(ddd_G);
        clearTimeout(eee_G);
        clearTimeout(fff_G);
        clearTimeout(ggg_G);
        clearTimeout(hhh_G);
        clearTimeout(iii_G);
        clearTimeout(jjj_G);
        clearTimeout(kkk_G);
      };

    },
      <number>2400
    );

    let ccc_G: any = setTimeout(() => {

      ___tds___[memo_index_ + <number>30].innerHTML = String('⬛');
      ___tds___[memo_index_ + <number>45].innerHTML = String('🔘');
      if (
        ___tds___[memo_index_ + <number>60].innerHTML === String('🔘')
      ) {
        clearTimeout(ddd_G);
        clearTimeout(eee_G);
        clearTimeout(fff_G);
        clearTimeout(ggg_G);
        clearTimeout(hhh_G);
        clearTimeout(iii_G);
        clearTimeout(jjj_G);
        clearTimeout(kkk_G);
      };

    },
      <number>2700
    );

    let ddd_G: any = setTimeout(() => {

      ___tds___[memo_index_ + <number>45].innerHTML = String('⬛');
      ___tds___[memo_index_ + <number>60].innerHTML = String('🔘');
      if (
        ___tds___[memo_index_ + <number>75].innerHTML === String('🔘')
      ) {
        clearTimeout(eee_G);
        clearTimeout(fff_G);
        clearTimeout(ggg_G);
        clearTimeout(hhh_G);
        clearTimeout(iii_G);
        clearTimeout(jjj_G);
        clearTimeout(kkk_G);
      };

    },
      <number>2900
    );

    let eee_G: any = setTimeout(() => {

      ___tds___[memo_index_ + <number>60].innerHTML = String('⬛');
      ___tds___[memo_index_ + <number>75].innerHTML = String('🔘');
      if (
        ___tds___[memo_index_ + <number>90].innerHTML === String('🔘')
      ) {
        clearTimeout(fff_G);
        clearTimeout(ggg_G);
        clearTimeout(hhh_G);
        clearTimeout(iii_G);
        clearTimeout(jjj_G);
        clearTimeout(kkk_G);
      };

    },
      <number>3100
    );

    let fff_G: any = setTimeout(() => {

      ___tds___[memo_index_ + <number>75].innerHTML = String('⬛');
      ___tds___[memo_index_ + <number>90].innerHTML = String('🔘');
      if (
        ___tds___[memo_index_ + <number>105].innerHTML === String('🔘')
      ) {
        clearTimeout(ggg_G);
        clearTimeout(hhh_G);
        clearTimeout(iii_G);
        clearTimeout(jjj_G);
        clearTimeout(kkk_G);
      };

    },
      <number>3300
    );

    let ggg_G: any = setTimeout(() => {

      ___tds___[memo_index_ + <number>90].innerHTML = String('⬛');
      ___tds___[memo_index_ + <number>105].innerHTML = String('🔘');
      if (
        ___tds___[memo_index_ + <number>120].innerHTML === String('🔘')
      ) {
        clearTimeout(hhh_G);
        clearTimeout(iii_G);
        clearTimeout(jjj_G);
        clearTimeout(kkk_G);
      };

    },
      <number>3500
    );

    let hhh_G: any = setTimeout(() => {

      ___tds___[memo_index_ + <number>105].innerHTML = String('⬛');
      ___tds___[memo_index_ + <number>120].innerHTML = String('🔘');
      if (
        ___tds___[memo_index_ + <number>135].innerHTML === String('🔘')
      ) {
        clearTimeout(iii_G);
        clearTimeout(jjj_G);
        clearTimeout(kkk_G);
      };

    },
      <number>3700
    );

    let iii_G: any = setTimeout(() => {

      ___tds___[memo_index_ + <number>120].innerHTML = String('⬛');
      ___tds___[memo_index_ + <number>135].innerHTML = String('🔘');
      if (
        ___tds___[memo_index_ + <number>150].innerHTML === String('🔘')
      ) {
        clearTimeout(jjj_G);
        clearTimeout(kkk_G);
      };

    },
      <number>3900
    );

    let jjj_G: any = setTimeout(() => {

      ___tds___[memo_index_ + <number>135].innerHTML = String('⬛');
      ___tds___[memo_index_ + <number>150].innerHTML = String('🔘');
      if (
        ___tds___[memo_index_ + <number>165].innerHTML === String('🔘')
      ) {
        clearTimeout(kkk_G);
      };

    },
      <number>4100
    );

    let kkk_G: any = setTimeout(() => {

      ___tds___[memo_index_ + <number>150].innerHTML = String('⬛');
      ___tds___[memo_index_ + <number>165].innerHTML = String('🔘');

    },
      <number>4300
    );

    let input_tfunc_output: any = setTimeout(() => {

      this.start_func();

    },
      <number>4500
    );

  }

  annul_UI_state_func(): void {

    let start_bttn: any = document.querySelector(String("#start-bttn"));
    let annul_UI_state_bttn: any = document.querySelector(String("#annul-UI-state-bttn"));
    let _________tds_________: any = document.querySelectorAll(String("td"));

    start_bttn.style.visibility = <string>"visible";
    annul_UI_state_bttn.style.visibility = <string>"hidden";
    [..._________tds_________].forEach((_cubicle_) => {
      if (
        String(_cubicle_.innerHTML) === String('🔽')
        ||
        String(_cubicle_.innerHTML) === String('🔘')
      ) {
        _cubicle_.innerHTML = String('⬛');
      };
    });

  }

}