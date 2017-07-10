<?php

namespace App\Http\Controllers;
use App\Events as event;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    //

    public function show($id)
    {
        $events=event::all()->where('year',$id);
        $answer=[];
		foreach($events as $event)
		{
			$var1=[];
			$var1['title']=$event->title;
			$var1['description']=$event->description;
			$img=[];
			if($event->img_1)
				array_push($img,$event->img_1);
			if($event->img_2)
				array_push($img,$event->img_2);
			if($event->img_3)
				array_push($img,$event->img_3);
			if($event->img_4)
				array_push($img,$event->img_4);
			if($event->img_5)
				array_push($img,$event->img_5);
			if($event->img_6)
				array_push($img,$event->img_6);
			$var1['images']=$img;
			array_push($answer,$var1);
		}
		return ($answer);
    }
}
