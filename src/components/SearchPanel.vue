<template>
<div>
  <div class="card">
    <p>Recherche</p>
    <div class="row" style="margin-left:unset;">
        <select ref="allStatut" id="lesSrvc" class="form-control" style="width:250px; display:inline;">
            <option v-for="statut in listStatut" :key="statut.id" :value="statut.name">{{statut.name}}</option>
        </select>
        <div class="pull-right" id="searchBar">
        <label id="labelSrch" for="nomService" s>Nom de service</label>
        <input id="inputSrch" v-on:keyup="chercherParNomService" type="text" ref="nomService" style="width:250px; display:inline;margin-left:10px;" class="form-control" >
        <button type="button" id="btnReduir" v-on:click="reduir" style="border: 1px solid black;margin-left:10px;" class="btn btn-outline-secondary waves-effect px-3"><i class="fas fa-chevron-down"></i></button>
        </div>
    </div>
    <div class="buttons-div" id="buttons-div">
        <button type="button" v-on:click="rechercher" id="rechercheBtn" class="btn btn-primary">Rechercher</button>
        <button type="button" v-on:click="reinitialiser" id="reinitialiserBtn"  class="btn btn-light" data-mdb-ripple-color="dark">Réinitialiser</button>
    </div>
  </div>
  <div class="card">
    <p class="result">Résultat</p>
    <table id="lesServices" class="table table-bordred mt-5">
        <thead>
            <tr>
                <th>Type de service</th>
                <th>Nom du service</th>
                <th>Statut</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
  </div>
</div>
</template>

<script>
import $ from 'jquery';
import servicesData from '../assets/Services.json';
import statutData from '../assets/Statut.json';
import 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css';

export default {
  name: 'SearchPanel',
  data() {
    return {
      services: servicesData, listStatut: statutData,
    };
  },
  mounted() {
    // $(() => {
    //   $('#example-getting-started').multiselect({
    //     bFilter: false,
    //   });
    // });
    $('#lesServices').DataTable({
      search: { regex: true },
      data: servicesData,
      columnDefs: [{
        targets: 3,
        createdCell(td) {
          $(td).css({
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
          });
        },
      }],
      columns: [
        { data: 'type' },
        { data: 'name' },
        { data: 'statut' },
        {
          data: 'id',
          render() {
            return '<a href="#"><i class="fas fa-pencil-alt"></i></a>';
          },
        },
      ],
    });
  },
  methods: {
    reinitialiser() {
      this.$refs.nomService.value = '';
      this.$refs.allStatut.value = 'A compléter';

      $('#lesServices').DataTable().column(2).search(
        '',
      )
        .draw();

      $('#lesServices').DataTable().column(1).search(
        '',
      )
        .draw();
    },

    rechercher() {
      console.log(this.$refs.allStatut.value);
      $('#lesServices').DataTable().column(2).search(
        this.$refs.allStatut.value,
      )
        .draw();

    //   let statutSelectionnes = '';
    //   $('.multiselect-container li.active').each(function fn() {
    //     statutSelectionnes += `${$.trim($(this).text())}|`;
    //   });
    //   const regix = $.trim(statutSelectionnes.slice(0, -1));
    //   console.log(regix);
    //   $('#lesServices').DataTable().column(2).search(
    //     regix, true, false,
    //   )
    //     .draw();
    },
    chercherParNomService() {
      $('#lesServices').DataTable().column(1).search(
        this.$refs.nomService.value,
      )
        .draw();
    },
    reduir() {
      if ($('#buttons-div').css('visibility') === 'visible') {
        $('#buttons-div').css('visibility', 'hidden');
        $('#lesSrvc').css('visibility', 'hidden');
        $('#inputSrch').css('visibility', 'hidden');
        $('#labelSrch').css('visibility', 'hidden');
        $('#btnReduir').html('<i class="fas fa-chevron-up"></i>');
      } else {
        $('#buttons-div').css('visibility', 'visible');
        $('#lesSrvc').css('visibility', 'visible');
        $('#inputSrch').css('visibility', 'visible');
        $('#labelSrch').css('visibility', 'visible');
        $('#btnReduir').html('<i class="fas fa-chevron-down"></i>');
      }
    },
  },
};
</script>
<style>
.dataTables_filter { visibility: hidden;}
.dropdown-menu{
    top:62%;
    left: unset;
    min-width: unset;
    width: 250px;
}
.dropdown-menu>li>a{
    padding: 0px;
}
.multiselect{
    width: 250px;
}
#lesServices{
    width: 0px;
}
#rechercheBtn{
    background: #05a0bd;
    border: #05a0bd;
    margin-right: 10px;
}
#rechercheBtn:hover{
    background: #15b9d6;
    border: #15b9d6;
}
#rechercheBtn:active{
    background: #108da3;
    border: #108da3;
}
.fa-pencil-alt{
    color: #275a7a;
}
#reinitialiserBtn{
    background: #1c4355;
    border: #1c4355;
    color: white;
}
#reinitialiserBtn:hover{
    background: #2b596e;
    border: #2b596e;
    color: white;
}
.buttons-div {
    display: flex;
    justify-content: center;
}
.table-header{
    text-align: left;
}
table{
    width: 100%;
    border: 2px solid #dddddd;
}
.card div{
    padding: 0px 20px 20px;
}
.card {
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    margin-top: 30px;
    margin-bottom: 40px;
    background: #f5f5f5;
}
.card p {
    color: #275a7a;
    margin-top: -11px;
    margin-left: 8px;
    background: white;
    width: 77px;
    padding-left: 5px;
}
.card .result {
    color: #275a7a;
    margin-top: -11px;
    margin-bottom: 30px;
    margin-left: 8px;
    background: white;
    width: 65px;
    padding-left: 5px;
}
</style>
