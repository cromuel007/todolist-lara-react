@extends('base2')
@section('main')
<!--footer starts from here-->
<footer class="footer">
    <div class="container bottom_border" style="padding-bottom: 50px;padding-top: 33px;">
        <div class="row">
            <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Footer 1</h5>
                <p><i class=""></i> Service 1 </p>
                <p><i class=""></i> Service 2 </p>
                <p><i class=""></i> Service 3 </p>
                <p><i class=""></i> Service 4 </p>
            </div>


            <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Footer 2</h5>
                <p><i class=""></i> Products 1 </p>
                <p><i class=""></i> Products 2 </p>
                <p><i class=""></i> Products 3 </p>
                <p><i class=""></i> Products 4 </p>
            </div>


            <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Footer 3</h5>
                <p><i class=""></i> Footer item 1 </p>
                <p><i class=""></i> Footer item 2 </p>
                <p><i class=""></i> Footer item 3 </p>
                <p><i class=""></i> Footer item 4 </p>
            </div>

            <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Footer 4</h5>
                <p><i class=""></i> Footer item 1 </p>
                <p><i class=""></i> Footer item 2 </p>
                <p><i class=""></i> Footer item 3 </p>
                <p><i class=""></i> Footer item 4 </p>
            </div>


            <div class=" col-sm-4 col-md  col-12 col left_border">
                <h5 class="headin5_amrc col_white_amrc pt2" style="margin-top: -10px;"><img src="{{ asset('images/logo.svg') }}"></h5>
                
                <!--headin5_amrc ends here-->
                <ul class="footer_ul2_amrc">
                    <li><a href="#"><i class="fleft"></i> </a>
                        <p>You are always welcome to contact us by email</p>
                    </li>
                    <li><a href="#"><i class="fleft"></i> </a>
                        <p>hello@tachines.com</p>
                    </li>
                    <li>
                        <div style="width: 300px;left: -27px;position: absolute;">
                            <ul class="footer-social">
                                <li><i class="fa fa-facebook social-icon social-bg" aria-hidden="true"></i></li>
                                <li><i class="fa fa-instagram social-icon social-bg" aria-hidden="true"></i></li>
                                <li><i class="fa fa-twitter social-icon social-bg" aria-hidden="true"></i></li>
                                <li><i class="fa fa-linkedin social-icon social-bg" aria-hidden="true"></i></li>

                            </ul>
                        </div>
                    </li>
                </ul>
                <!--footer_ul2_amrc ends here-->
            </div>
        </div>
    </div>


    <div class="container">
        <ul class="foote_bottom_ul_amrc">

        </ul>
        <div class="row">
            <div class="col-md-6">
                <a href="#" style="text-decoration: none;color: #ccc;">Copyright @ 2020 Tachines | all rights reserved</a>
            </div>
            <!-- End Col -->
            <div class="col-md-6">
                <div class="copyright-menu">
                    <ul>
                        <li>
                            <a href="#">Terms & conditions</a>
                        </li>
                        <li>
                            <a href="#">Cookie policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- End col -->
        </div>
        <!--social_footer_ul ends here-->
    </div>

</footer>
@endsection