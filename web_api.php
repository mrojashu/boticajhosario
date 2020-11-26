<?php 

	header("Access-Control-Allow-Origin: *");

	if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
		echo json_encode(array('status' => false));
		exit;
	}

	$postdata = file_get_contents("php://input");

	$datos=json_decode($postdata, true);

	function dv_info($if_devl){
		echo json_encode($if_devl);
	}

	switch ($datos['funcion']) {
		case 'fu_cone':
			cn_inte();
		break;
		case 'fu_tmusua_q001':
			ph_tmusua_q001($datos);
		break;
		case 'fu_tcprod_alma_q001':
			ph_tcprod_alma_q001();
		break;
		case 'fu_ttunid_q001':
			ph_ttunid_q001();
		break;
		case 'fu_tmprod_q001':
			ph_tmprod_q001();
		break;
		case 'fu_tmalma_ingr_i001':
			ph_tmalma_ingr_i001($datos);
		break;
		case 'fu_tcprod_alma_q002':
			ph_tcprod_alma_q002($datos);
		break;
		case 'fu_tmalma_ingr_q001':
			ph_tmalma_ingr_q001($datos);
		break;
		case 'fu_tcprod_alma_q003':
			ph_tcprod_alma_q003();
		break;		
		default:
		break;
	}	

	function cn_inte(){
		$de_mens="confirmar";
		dv_info($de_mens);
	}

	function ph_tmusua_q001($datos){

		$v_ph_co_usua="{$datos['ts_c_co_usua']}";
		$v_ph_no_clav="{$datos['ts_c_no_clav']}";

		$co_sql="CALL sp_tmusua_q001('$v_ph_co_usua', '$v_ph_no_clav');";
		include "cone_db.php";

		$co_ejec=$db->query($co_sql);
		$co_argl=array();

		if($co_ejec){
			while ($resultado=mysqli_fetch_assoc($co_ejec)):
				$co_argl[]=$resultado;
			endwhile;
			dv_info($co_argl);
		}else{
			dv_info('no ejecuto');
		}
	}

	function ph_tcprod_alma_q001(){

		$co_sql="CALL sp_tcprod_alma_q001();";
		include "cone_db.php";

		$co_ejec=$db->query($co_sql);
		$co_argl=array();

		if($co_ejec){
			while ($resultado=mysqli_fetch_assoc($co_ejec)):
				$co_argl[]=$resultado;
			endwhile;
			dv_info($co_argl);
		}else{
			dv_info(mysqli_error($db));
		}
	}

	function ph_tcprod_alma_q002($datos){

		$v_ph_dato="{$datos['ts_c_dato']}";

		$co_sql="CALL sp_tcprod_alma_q002('$v_ph_dato');";
		include "cone_db.php";

		$co_ejec=$db->query($co_sql);
		$co_argl=array();

		if($co_ejec){
			while ($resultado=mysqli_fetch_assoc($co_ejec)):
				$co_argl[]=$resultado;
			endwhile;
			dv_info($co_argl);
		}else{
			dv_info(mysqli_error($db));
		}
	}

	function ph_tmprod_q001(){

		$co_sql="CALL sp_tmprod_q001()";
		include "cone_db.php";

		$co_ejec=$db->query($co_sql);
		$co_argl=array();

		if($co_ejec){
			while ($resultado=mysqli_fetch_assoc($co_ejec)):
				$co_argl[]=$resultado;
			endwhile;
			dv_info($co_argl);
		}else{
			dv_info(mysqli_error($db));
		}
	}

	function ph_ttunid_q001(){

		$co_sql="CALL sp_ttunid_q001()";
		include "cone_db.php";

		$co_ejec=$db->query($co_sql);
		$co_argl=array();

		if($co_ejec){
			while ($resultado=mysqli_fetch_assoc($co_ejec)):
				$co_argl[]=$resultado;
			endwhile;
			dv_info($co_argl);
		}else{
			dv_info(mysqli_error($db));
		}
	}

	function ph_tmalma_ingr_i001($datos){

		$v_ph_nu_guia="{$datos['ts_c_nu_guia']}";
		$v_ph_co_prod="{$datos['ts_c_co_prod']}";
		$v_ph_co_unid="{$datos['ts_c_co_unid']}";
		$v_ph_ca_pack="{$datos['ts_c_ca_pack']}";
		$v_ph_fe_venc="{$datos['ts_c_fe_venc']}";
		$v_ph_co_usua="{$datos['ts_c_co_usua']}";

		$co_sql="CALL sp_tmalma_ingr_i001('$v_ph_nu_guia', '$v_ph_co_prod', '$v_ph_co_unid', '$v_ph_ca_pack', '$v_ph_fe_venc', '$v_ph_co_usua');";
		include "cone_db.php";

		$co_ejec=$db->query($co_sql);

		if($co_ejec){
			dv_info('EXITO');
		}else{
			dv_info(mysqli_error($db));
		}
	}

	function ph_tmalma_ingr_q001(){

		$co_sql="CALL sp_tmalma_ingr_q001();";
		include "cone_db.php";

		$co_ejec=$db->query($co_sql);
		$co_argl=array();

		if($co_ejec){
			while ($resultado=mysqli_fetch_assoc($co_ejec)):
				$co_argl[]=$resultado;
			endwhile;
			dv_info($co_argl);
		}else{
			dv_info(mysqli_error($db));
		}
	}

	function ph_tcprod_alma_q003(){

		$co_sql="CALL sp_tcprod_alma_q003();";
		include "cone_db.php";

		$co_ejec=$db->query($co_sql);
		$co_argl=array();

		if($co_ejec){
			while ($resultado=mysqli_fetch_assoc($co_ejec)):
				$co_argl[]=$resultado;
			endwhile;
			dv_info($co_argl);
		}else{
			dv_info(mysqli_error($db));
		}
	}
	

?>