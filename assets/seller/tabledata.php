<?php
include('getdata.php');
  function datasearch($array, $search)
  {
    $result = array();
	$new_array = array();
	if($search['categories'] || $search['cities']){
	/*foreach($search['categories'] as $ct){
		$result[] = array_push($result, $value);
	}*/
	if($search['categories']){
	foreach($search['categories'] as $ct){
	foreach(array_keys($array) as $key){ 
	$temp[$key] = $array[$key]['categories']; 
	$tempc[$key] = $array[$key]['cities']; 
	if($search['categories'] && $search['cities']){
	if ($temp[$key] == $ct && $tempc[$key] == $search['cities']){ 
                    $new_array[$key] = $array[$key]; 
    } 
	}elseif($search['categories'] && !$search['cities']){
	if ($temp[$key] == $ct){ 
                    $new_array[$key] = $array[$key]; 
    } 	
	}
	
	
	}
	}
	
	
	}
	else{
	foreach(array_keys($array) as $key){ 
	$tempc[$key] = $array[$key]['cities']; 
	if($tempc[$key] == $search['cities']){
		$new_array[$key] = $array[$key]; 
	}
	}
	//echo 1;
	}
	

	}else{
		$new_array=$array;
	}
	
	return $new_array;
	
  }


/*if($_POST['cat']){
$ar=array();
foreach($_POST['cat'] as $ct){
	$ar[]=$ct;
}
$filtered = multi_array_search($tbledta, array('cities' => $_POST['city'], 'categories' => 'Beauty'));

}*/
if(isset($_POST['cat'])){
	$ct=$_POST['cat'];
}
else{
	$ct='';
}
if(isset($_POST['city'])){
	$cty=$_POST['city'];
}
else{
	$cty='';
}
if(isset($_POST['cat']) || isset($_POST['city'])){
$result = datasearch($tbledta, array('categories' => $ct,'cities' => $cty));	

}else{
$result = $tbledta;
//print_r($result);
}




$html='<table class="table table-striped" id="sellertable">
  <thead>
    <tr>
      <th scope="col">Seller Name</th>
      <th scope="col">Domain</th>
      <th scope="col">Categories</th>
      <th scope="col">Active Cities</th>
      <th scope="col">SKU Count</th>
      <th scope="col">Pincode</th>
    </tr>
  </thead>
  <tbody>';
  
 foreach($result as $dta){
$html.='<tr>
      <td>'.$dta['sellername'].'</td>
      <td>'.$dta['domain'].'</td>
      <td>'.$dta['categories'].'</td>
      <td>'.$dta['cities'].'</td>
      <td>'.$dta['count'].'</td>
      <td>'.$dta['pincode'].'</td>
    </tr>'; 
 }
  $html.='</tbody>
</table>';

echo $html;