<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Idea;
use Symfony\Component\Serializer\SerializerInterface;
use Faker;



class IdeaController extends AbstractController
{
    /**
     * @Route("/api/idea", name="idea")
     */
    public function index(SerializerInterface $serializer)
    {
        $faker = Faker\Factory::create('fr_FR');
        $response = new Response();
       
        $ideas = array();
        $nbIdeas = rand(10,50);
        $today = new \DateTime();
        $limitDate = date_sub($today, date_interval_create_from_date_string('6 month'));
        $today = new \DateTime();

        for($i = 1; $i <= $nbIdeas; $i++){
        $idea = new Idea();
        $idea->setId($i);
        $idea->setAuthor($faker->name);

        $randomTimestamp = mt_rand($limitDate->getTimestamp(), $today->getTimestamp());
        $randomDate = new \DateTime();
        $randomDate->setTimestamp($randomTimestamp);

        $idea->setCreatedAt($randomDate);
        $idea->setScore(mt_rand(0,50));
        $idea->setTitle($faker->text);
        array_push($ideas,$idea);
        }
       

        $ideas = $serializer->serialize($ideas, 'json');
        $response->setContent($ideas);

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
       
        return $response;
        
    }

        
    
}
