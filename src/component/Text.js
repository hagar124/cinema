
import { useRecoilState } from "recoil";
import { showTextAtom } from "./atoms";
const Text =() => {
    const [showText, setShowText ] = useRecoilState(showTextAtom);


    return <div>
      
        {showText && <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">enter QR</label>
      <input type="QR" class="form-control" id="inputEmail4" placeholder="Qr"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">mobile pone</label>
      <input type="phone" class="form-control" id="inputPassword4" placeholder="phone"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">postion in hall</label>
    <input type="hall.num" class="form-control" id="inputAddress" placeholder="hall.num"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">N.ticket</label>
    <input type="num" class="form-control" id="inputAddress2" placeholder="num"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">time(pm) or (am)</label>
      <input type="am or pm" class="form-control" id="am or pm"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">film</label>
      <select id="select movie" class="form-control">
        <option selected>Choose...</option>
        <option>waheed tany</option>
        <option>tamaseeh elneil</option>
        <option>the Northman</option>
        <option>zombie</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">name</label>
      <input type="your name" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        not a robot
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">book</button>
</form>}
         
         </div>
         
    

}
export default Text 